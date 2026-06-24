// Import createAsyncThunk and createSlice here.
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { mockFetch } from '../../mocks/mockFetch';

// Create loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadComments',
  async (id) => {
    const json = await mockFetch(`/api/articles/${id}/comments`);
    return json;
  }
)
// Create postCommentForArticleId here.
export const postCommentForArticleId = createAsyncThunk(
  'comments/postComment',
  async ({articleId, comment}) => {
    const requestBody = JSON.stringify({comment});
    const json = await mockFetch(`/api/articles/${articleId}/comments`, {method: 'POST', body: requestBody});
    return json;
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    // Add initial state properties here.
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
    createCommentIsPending: false,
    failedToCreateComment: false
  },
  // Add extraReducers here.
  extraReducers: (builder) => {
    builder
    .addCase(loadCommentsForArticleId.pending, (state, action) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    })
    .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
      state.byArticleId[action.payload.articleId] = action.payload.comments;
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
    })
    .addCase(loadCommentsForArticleId.rejected, (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    })
    .addCase(postCommentForArticleId.pending, (state, action)  => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    })
    .addCase(postCommentForArticleId.fulfilled, (state, action) => {
      if(state.byArticleId[action.payload.articleId]) {
        state.byArticleId[action.payload.articleId].push(action.payload);
      }
      else {
        state.byArticleId[action.payload.articleId] = [action.payload];
      }
      state.createCommentIsPending = false;
      state.failedToCreateComment = false;
    })
    .addCase(postCommentForArticleId.rejected, (state, action)   => {
      state.createCommentIsPending = false;
      state.failedToCreateComment = true;
    });

  }
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
