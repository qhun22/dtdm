import { useNavigate } from 'react-router-dom';
import { lessons } from '../data/questions';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-icon">☁️</div>
        <h1>Điện Toán Đám Mây</h1>
        <p>Trắc nghiệm ôn tập kiến thức</p>
      </header>

      <main className="lesson-grid">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson-card ${!lesson.available ? 'lesson-card--locked' : ''}`}
            onClick={() => lesson.available && navigate(`/quiz/${lesson.id}`)}
          >
            <div className="lesson-card__badge">{lesson.id < 10 ? `0${lesson.id}` : lesson.id}</div>
            <div className="lesson-card__icon">{lesson.icon}</div>
            <div className="lesson-card__content">
              <h3>{lesson.title}</h3>
              <p>{lesson.subtitle}</p>
              {lesson.available ? (
                <span className="lesson-card__count">{lesson.questions.length} câu hỏi</span>
              ) : (
                <span className="lesson-card__locked">🔒 Sắp ra mắt</span>
              )}
            </div>
            {lesson.available && (
              <div className="lesson-card__arrow">›</div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
