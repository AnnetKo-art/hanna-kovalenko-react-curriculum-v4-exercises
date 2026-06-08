import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add save functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    if (isEditing) {
      dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
      setWorkingText(question.question); // Сбрасываем текст к исходному
    } else {
      // Включаем режим редактирования для этого вопроса
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    if (workingText.trim()) {
      dispatch({
        type: 'UPDATE_QUESTION_TEXT',
        payload: { id: question.id, newText: workingText.trim() },
      });
      // Закрываем режим редактирования после сохранения
      dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
    }
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
    }
  };
  // --- Multiple Choice functionality---
  const handleUpdateOption = (index, newText) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: { questionId: question.id, optionIndex: index, newText },
    });
  };

  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex: index },
    });
  };

  const handleAddOption = () => {
    const text = window.prompt('Enter new option text:');
    if (text && text.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: text.trim() },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['edit-form']}>
            <textarea
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
              className={styles['question-input']}
              rows={2}
            />
            <button onClick={handleSave} className={styles['save-btn']}>
              Save
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '5px',
                    }}
                  >
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleUpdateOption(index, e.target.value)
                      }
                      className={styles['option-input']}
                    />
                    <button
                      onClick={() => handleDeleteOption(index)}
                      disabled={question.options.length <= 2}
                      className={styles['remove-option-btn']}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>
          {isEditing && (
            <button
              onClick={handleAddOption}
              className={styles['add-option-btn']}
            >
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
