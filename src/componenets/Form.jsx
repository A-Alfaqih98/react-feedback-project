import { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
function Form() {
  const { handleFeedback, FeedbackItem, updateFeedbackItem } =
    useContext(FeedbackContext);
  const [text, settext] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  /* set the form value to the item being edited */
  useEffect(() => {
    if (FeedbackItem.edit === true) {
      settext(FeedbackItem.item.text);
      setbtnDisabled(false);
      setRating(FeedbackItem.item.rating);
    }
  }, [FeedbackItem]);

  const handleTextChange = (e) => {
    if (text === '') {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    settext(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const feedbackSubmit = {
        text,
        rating,
      };

      if (FeedbackItem.edit === true) {
        updateFeedbackItem(FeedbackItem.item.id, feedbackSubmit);
      } else {
        handleFeedback(feedbackSubmit);
      }

      settext('');
    }
  };
  return (
    <>
      <Card>
        <form action="#" onSubmit={(e) => handlesubmit(e)}>
          <h2>How would you rate your service with is?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              type="text"
              placeholder="Write a review"
              onChange={(e) => handleTextChange(e)}
              value={text}
            />
            <Button isDisabled={btnDisabled} type="submit">
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default Form;
