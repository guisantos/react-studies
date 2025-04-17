import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Dropdown from './components/Dropdown';
import Card from './components/Card';
import ToastContainer, { useToast } from './components/toast/ToastContainer';
import Tabs from './components/tabs/Tabs';
import Stepper from './components/stepper/Stepper';
import Rating from './components/rating/Rating';

function App() {
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState('');
  const {toasts, addToast, removeToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !favoriteColor) {
      addToast('Please fill in all fields.', 'error');
      return;
    }

    setIsModalOpen(true);
    addToast('Submitted successfully!', 'success')
  };

  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  const RatingDemo = () => {
    const [rating, setRating] = useState(3);

    return (
      <div>
        <h2>Rate this app!</h2>
        <Rating value={rating} onChange={setRating}/>
        <p>Your rating: {rating} star{rating > 1 ? 's' : ''}</p>

        <h3>Read-only version:</h3>
        <Rating value={4} readOnly />
      </div>
    )
  };

  const tabs = [
    {
      label: 'Form with Modal',
      content: (
        <form onSubmit={handleSubmit}>
          <Card title="Person favorite color" 
          footer={<Button type="submit" label="Submit" onClick={handleSubmit} />}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
          />

          <Dropdown 
            label="Favorite Color"
            name="favoriteColor"
            options={colorOptions}
            value={favoriteColor}
            onChange={setFavoriteColor}
          />
          
          </Card>
        </form>
      )
    },
    {
      label: 'Toast Demo',
      content: (
        <>
          <Button label="Show Success Toast" onClick={() => addToast("Success toast!", "success")} />
          <Button label="Show Info Toast" onClick={() => addToast("Info toast!", "info")} />
          <Button label="Show Error Toast" onClick={() => addToast("Error toast!", "error")} />
        </>
      )
    },
    {
      label: "Card Preview",
      content: (
        <Card
          title="Jane Doe"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          footer={<Button label="Follow" onClick={() => addToast("Following Jane", "info")}/>}
          >
          <p>Frontend developer with a love for React and Coffee</p>
        </Card>
      )
    },
    {
      label: "Stepper",
      content: (
        <Stepper steps={[
          {
            label: "Step One",
            content: <p>This is the first step!</p>
          },
          {
            label: "Step Two",
            content: <p>This is the second step!</p>
          },
          {
            label: "Step Three",
            content: <p>This is the third step!</p>
          },
        ]}
        />
      )
    },
    {
      label: "Rating",
      content: <RatingDemo />
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Component playground</h1>
        <Tabs tabs={tabs} />
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Submission Successful">
        <p>Hello, <strong>{name}</strong>! You selected <strong>{favoriteColor}</strong></p>
      </Modal>

      <ToastContainer 
        toasts={toasts}
        removeToast={removeToast}
      />
    </div>
  );
}

export default App;
