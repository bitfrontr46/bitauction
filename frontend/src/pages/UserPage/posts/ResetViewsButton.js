import * as React from "react";
import { useState } from "react";
import {
  Button,
  Confirm,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll,
} from "react-admin";

const ResetViewsButton = ({ selectedIds }) => {
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    "posts",
    selectedIds,
    { views: 0 },
    {
      onSuccess: () => {
        refresh();
        notify("Posts updated", "info", {}, true);
        unselectAll("posts");
      },
      onFailure: (error) => notify("Error: posts not updated", "warning"),
      undoable: true
    }
  );
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    updateMany();
    setOpen(false);
  };

  return (
    <>
      <Button label="Reset Views" onClick={handleClick} />
      <Confirm
        isOpen={open}
        loading={loading}
        title="Update View Count"
        content="Are you sure you want to reset the views for these items?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default ResetViewsButton;
