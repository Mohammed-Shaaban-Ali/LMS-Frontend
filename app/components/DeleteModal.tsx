import { Box, Modal } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleDelete: () => void;
};

function DeleteModal({ open, setOpen, handleDelete }: Props) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[450px] bg-white dark:bg-slate-900 rounded-lg shadow p-4 outline-none  ">
        <h3 className="text-xl  text-black dark:text-white font-bold text-center">Are You Shour you want to delete this </h3>
      <div className="flex items-center justify-around  mt-12">
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 bg-red-500 text-white whitespace-no-wrap  border border-red-700 rounded-md shadow-sm hover:bg-red-700 "
            data-rounded="rounded-md"
            data-primary-reset="{}"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-green-700 rounded-md shadow-sm hover:bg-green-700 "
            data-rounded="rounded-md"
            data-primary-reset="{}"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
