import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, text: 'This item is from context', rating: 10 },
    { id: 2, text: 'This item is from context', rating: 7 },
  ]);

  const [FeedbackItem, setFeedbackItem] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackItem({
      item,
      edit: true,
    });
  };

  /* Update feedback */
  const updateFeedbackItem = (id, updItem) => {
    console.log(id, updItem);
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const deleteTask = (id) => {
    window.confirm('Are you sure you want to delete this task') &&
      setFeedbacks(feedbacks.filter((feedback) => id !== feedback.id));
  };

  const handleFeedback = (feedback) => {
    feedback.id = uuidv4();
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteTask,
        handleFeedback,
        editFeedback,
        FeedbackItem,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
