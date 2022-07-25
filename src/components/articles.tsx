import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
          </div>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
          <hr />
        </li>
      ))}
    </ul >
  );
}
