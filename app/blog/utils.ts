// Placeholder utility functions for blog

export function getBlogPosts() {
  // Return an array of dummy blog post objects
  return [
    {
      metadata: {
        title: 'Sample Post',
        publishedAt: '2025-01-01',
        summary: 'This is a summary of the sample blog post.'
      },
      slug: 'sample-post',
      content: 'This is a sample blog post.'
    }
  ];
}

export function formatDate(dateString: string, short: boolean = false): string {
  // Simple date formatting
  const date = new Date(dateString);
  return short
    ? date.toLocaleDateString()
    : date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
