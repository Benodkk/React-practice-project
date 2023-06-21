import { useEffect, useState } from "react";
import { useAPI } from "../hooks/useAPI";

const url = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const Posts = () => {
  const [renderPosts, setRenderPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useAPI(url);

  useEffect(() => {
    // cos mi tu nie pasuje

    if (data) {
      setRenderPosts(data.slice((page - 1) * 4, page * 4));
    }
  }, [data, page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }
  if (data) {
    return (
      <div
        className="flex w-full flex-col
    "
      >
        <div className="flex w-full flex-col">
          {renderPosts.map((post) => (
            <div key={post.id}>
              <div className="text-xl font-semibold">{post.title}</div>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="border-2 border-black bg-black p-2 text-white hover:bg-white hover:text-black hover:disabled:bg-gray-300"
          >
            {"<"}
          </button>
          <button
            disabled={data.length / 4 === page}
            onClick={() => setPage(page + 1)}
            className="border-2 border-black bg-black p-2 text-white hover:bg-white hover:text-black hover:disabled:bg-gray-300"
          >
            {">"}
          </button>
        </div>
      </div>
    );
  }
};
