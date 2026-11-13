import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lessons } from '../data/questions';
import '../styles/Quiz.css';

type QuizState = 'intro' | 'playing' | 'result';

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === Number(id));

  const [state, setState] = useState<QuizState>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!lesson) {
    return (
      <div className="quiz-error">
        <p>Bài học không tồn tại.</p>
        <button onClick={() => navigate('/')}>Về trang chủ</button>
      </div>
    );
  }

  const question = lesson.questions[current];
  const totalQuestions = lesson.questions.length;
  const score = answers.filter((a, i) => a === lesson.questions[i].correct).length;

  const handleSelect = (optionIdx: number) => {
    if (showFeedback) return;
    setSelected(optionIdx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    setShowFeedback(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    setShowFeedback(false);

    if (current + 1 >= totalQuestions) {
      setState('result');
    } else {
      setCurrent(current + 1);
    }
  };

  const handleRestart = () => {
    setState('intro');
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowFeedback(false);
  };

  const getOptionClass = (optionIdx: number) => {
    if (!showFeedback) {
      return selected === optionIdx ? 'option option--selected' : 'option';
    }
    if (optionIdx === question.correct) return 'option option--correct';
    if (optionIdx === selected && selected !== question.correct) return 'option option--wrong';
    return 'option option--dim';
  };

  if (state === 'intro') {
    return (
      <div className="quiz-intro">
        <button className="back-btn" onClick={() => navigate('/')}>← Quay lại</button>
        <div className="intro-card">
          <div className="intro-icon">{lesson.icon}</div>
          <h1>{lesson.title}</h1>
          <p>{lesson.subtitle}</p>
          <div className="intro-stats">
            <div className="stat">
              <span className="stat-num">{totalQuestions}</span>
              <span className="stat-label">Câu hỏi</span>
            </div>
            <div className="stat">
              <span className="stat-num">MCQ</span>
              <span className="stat-label">Trắc nghiệm</span>
            </div>
          </div>
          <button className="start-btn" onClick={() => setState('playing')}>
            Bắt đầu làm bài →
          </button>
        </div>
      </div>
    );
  }

  if (state === 'result') {
    const percent = Math.round((score / totalQuestions) * 100);
    const passed = percent >= 60;
    return (
      <div className="quiz-result">
        <div className="result-card">
          <div className="result-emoji">{passed ? '🎉' : '📖'}</div>
          <h2>{passed ? 'Xuất sắc!' : 'Cố gắng hơn nhé!'}</h2>
          <div className="result-score">
            <span className="score-num">{score}</span>
            <span className="score-sep">/</span>
            <span className="score-total">{totalQuestions}</span>
          </div>
          <div className={`result-percent ${passed ? 'result-percent--pass' : 'result-percent--fail'}`}>
            {percent}%
          </div>

          <div className="result-review">
            <h3>Chi tiết đáp án</h3>
            {lesson.questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correct;
              return (
                <div key={q.id} className={`review-item ${isCorrect ? 'review-item--correct' : 'review-item--wrong'}`}>
                  <div className="review-header">
                    <span className="review-num">Câu {i + 1}</span>
                    <span className="review-status">{isCorrect ? '✓' : '✗'}</span>
                  </div>
                  <p className="review-question">{q.question}</p>
                  {!isCorrect && (
                    <p className="review-your">
                      Bạn chọn: <span>{userAnswer !== null ? q.options[userAnswer] : 'Không chọn'}</span>
                    </p>
                  )}
                  <p className="review-correct">
                    Đáp án đúng: <span>{q.options[q.correct]}</span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="result-actions">
            <button className="btn-secondary" onClick={handleRestart}>Làm lại</button>
            <button className="btn-primary" onClick={() => navigate('/')}>Về trang chủ</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-playing">
      <div className="quiz-top">
        <button className="back-btn" onClick={() => navigate('/')}>✕</button>
        <div className="progress-info">
          <span>{current + 1} / {totalQuestions}</span>
        </div>
        <div className="score-info">🏆 {score}</div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((current) / totalQuestions) * 100}%` }} />
      </div>

      <div className="question-area">
        <div className="question-num">Câu {current + 1}</div>
        <p className="question-text">{question.question}</p>
      </div>

      <div className="options-list">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className={getOptionClass(idx)}
            onClick={() => handleSelect(idx)}
          >
            <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
            <span className="option-text">{opt}</span>
            {showFeedback && idx === question.correct && (
              <span className="option-icon">✓</span>
            )}
            {showFeedback && idx === selected && selected !== question.correct && (
              <span className="option-icon">✗</span>
            )}
          </button>
        ))}
      </div>

      <div className="quiz-footer">
        {!showFeedback ? (
          <button
            className={`confirm-btn ${selected === null ? 'confirm-btn--disabled' : ''}`}
            onClick={handleConfirm}
            disabled={selected === null}
          >
            Xác nhận
          </button>
        ) : (
          <div className="feedback-area">
            <div className={`feedback-msg ${selected === question.correct ? 'feedback-msg--correct' : 'feedback-msg--wrong'}`}>
              {selected === question.correct ? '✓ Chính xác!' : `✗ Đáp án đúng: ${question.options[question.correct]}`}
            </div>
            <button className="next-btn" onClick={handleNext}>
              {current + 1 >= totalQuestions ? 'Xem kết quả' : 'Câu tiếp theo →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
