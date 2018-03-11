import blogPost from './blog-post';
import comment from './comment';
import user from './user';

export default {
    ...blogPost,
    ...comment,
    ...user,
};
