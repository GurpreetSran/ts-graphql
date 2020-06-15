import db from '../db';

const Subscription = {
  comment: {
    subscribe(
      _parent: undefined,
      { postId }: { postId: string },
      ctx: { db: typeof db; pubSub: any },
      _info: any
    ) {
      const post = ctx.db.posts.find((post) => post.id === postId);

      if (!post) {
        throw new Error('Post not found');
      }

      return ctx.pubSub.asyncIterator(`comment ${postId}`);
    },
  },
};

export default Subscription;
