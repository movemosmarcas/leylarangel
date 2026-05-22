export const mockBlogService = {
  getPosts: async () => {
    return [
      { id: 1, title: 'Mock Post 1', body: 'This is a mock post.' },
      { id: 2, title: 'Mock Post 2', body: 'This is another mock post.' }
    ];
  },
  getPostById: async (id: number) => {
    return { id, title: `Mock Post ${id}`, body: `This is mock post ${id}.` };
  }
};
