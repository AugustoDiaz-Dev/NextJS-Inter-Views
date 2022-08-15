import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";
import { motion } from "framer-motion";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <motion.h2
              initial={{ color: "var(--myWhite)", y: -100 }}
              animate={{ color: "var(--myGreen)", y: 0, transition: { duration: 1 } }}

            >
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </motion.h2>
          </div>
          <p>{post.excerpt}</p>
          <p>{post.date}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
          <hr />
        </li>
      ))
      }
    </ul >
  );
}
