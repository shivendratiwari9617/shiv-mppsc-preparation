import ReviewListPage from '../components/ReviewListPage';

export default function BookmarksPage() {
  return (
    <ReviewListPage
      title="Bookmarks"
      icon="🔖"
      description="Questions you flagged for later review."
      fetchUrl="/bookmarks"
      queryKey="bookmarks"
      sessionPayload={{ mode: 'BOOKMARKS' }}
      emptyMessage="No bookmarks yet. Tap the 📑 icon while practicing to save a question here."
    />
  );
}
