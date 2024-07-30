import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useInfinitePosts } from "../hooks/useInfinitePosts";
import PostCard from "./PostCard";
import { useInView } from "react-intersection-observer";

const InfiniteScrollList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}
      <Box
        ref={ref}
        sx={{ display: "flex", justifyContent: "center", padding: 2 }}
      >
        {isFetchingNextPage && <CircularProgress />}
      </Box>
    </Box>
  );
};

export default InfiniteScrollList;
