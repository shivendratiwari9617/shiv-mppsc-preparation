import ReviewListPage from '../components/ReviewListPage';

export default function WrongDeckPage() {
  return (
    <ReviewListPage
      title="Wrong Answers Deck"
      icon="❌"
      description="Every question you've ever answered incorrectly, collected in one place for focused revision."
      fetchUrl="/review/wrong"
      queryKey="review-wrong"
      sessionPayload={{ mode: 'WRONG_DECK' }}
      emptyMessage="No wrong answers yet — keep practicing! 🎉"
    />
  );
}
