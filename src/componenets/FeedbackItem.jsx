import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackItem({ feedback }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('this is an example of a feedback item');
  const { deleteTask, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{feedback.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => deleteTask(feedback.id)} />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
