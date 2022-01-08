import Card from '../componenets/shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Projcet</h1>
        <p>This is a React app to leaave a feedback for a product or sevice</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
