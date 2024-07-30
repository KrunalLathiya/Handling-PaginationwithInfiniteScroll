import { Card, CardContent, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const PostCard = ({ post }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {
            // eslint-disable-next-line react/prop-types
            post.title
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            // eslint-disable-next-line react/prop-types
            post.body
          }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
