import ReviewListPage from '../components/ReviewListPage';

export default function DuePage() {
  return (
    <ReviewListPage
      title="Revision Due"
      icon="🔁"
      description="Spaced-repetition schedule — questions that are due for another look based on your past performance."
      fetchUrl="/review/due"
      queryKey="review-due"
      sessionPayload={{ mode: 'DUE' }}
      emptyMessage="Nothing due for revision right now. Come back later!"
    />
  );
}
