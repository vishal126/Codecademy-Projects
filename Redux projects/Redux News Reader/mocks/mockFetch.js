import articlesData from './articles.json';
import commentsData from './comments.json';

const userComments = {};

export async function mockFetch(url, options = {}) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const method = options.method || 'GET';

  if (url === '/api/articles' && method === 'GET') {
    return articlesData.map(({ id, title, preview, image }) => ({ id, title, preview, image }));
  }

  const commentsMatch = url.match(/^\/api\/articles\/(\d+)\/comments$/);
  if (commentsMatch && method === 'GET') {
    const articleId = parseInt(commentsMatch[1]);
    return {
      articleId,
      comments: commentsData
        .filter((c) => c.articleId === articleId)
        .concat(userComments[articleId] || []),
    };
  }

  if (commentsMatch && method === 'POST') {
    const articleId = parseInt(commentsMatch[1]);
    const comment = {
      id: commentsData.length,
      articleId,
      text: JSON.parse(options.body).comment,
    };
    userComments[articleId] = [...(userComments[articleId] || []), comment];
    return comment;
  }

  const articleMatch = url.match(/^\/api\/articles\/(\d+)$/);
  if (articleMatch && method === 'GET') {
    const articleId = parseInt(articleMatch[1]);
    return articlesData.find((a) => a.id === articleId);
  }

  throw new Error(`mockFetch: no handler for ${method} ${url}`);
}
