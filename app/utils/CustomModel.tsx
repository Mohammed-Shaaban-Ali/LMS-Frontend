// CustomModel.tsx
import { Modal, Box } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  Component: React.ComponentType<any>; // Correct type for Component prop
  setRoute?: (route: string) => void;
};

function CustomModel({ open, Component, setOpen, setRoute }: Props) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[450px] bg-white dark:bg-slate-900 rounded-lg shadow p-4 outline-none">
        <Component setOpen={setOpen} setRoute={setRoute} />
      </Box>
    </Modal>
  );
}

export default CustomModel;
