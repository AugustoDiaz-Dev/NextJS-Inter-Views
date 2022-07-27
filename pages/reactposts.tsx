import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
    return (
        <>
            <h1>Inter-Views</h1>
            <Articles posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts()
        .slice(0, 100) // How many posts to show
        .map((post) => post.meta)
        .filter((posts) => posts.tags.includes("react"))

    return { props: { posts } };
}