import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import MainTitle from "@/src/components/MainTitle";

export default function Home({ posts }: { posts: PostMeta[] }) {
    return (
        <>
            <MainTitle />
            <Articles posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts()
        .slice(0, 100) // How many posts to show
        .map((post) => post.meta)
        .filter((posts) => posts.tags.includes("typescript"))

    return { props: { posts } };
}