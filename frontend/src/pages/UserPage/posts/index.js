// Spread 연산자 이용을 위해, 한 군데 모아서 Export

import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import PostList from "./PostList";
import ResetViewsButton from "./ResetViewsButton";
import PostIcon from "@material-ui/icons/Book";

export default {
  create: PostCreate,
  edit: PostEdit,
  list: PostList,
  resetViewsButton: ResetViewsButton,
  icon: PostIcon,
};
