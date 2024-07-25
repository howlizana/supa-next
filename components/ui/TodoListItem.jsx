"use client";
import React, { useState } from "react";
import { CiCircleCheck, CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const TodoListItem = ({ todo, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };

  // 수정이끝났을때
  const onFinishEdit = () => {
    setIsEdit(false);
    onUpdate(todo.id, userInput);
  };

  // 삭제버튼 눌렀을때
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="min-h-[60px] bg-[#B280D9] border border-black rounded-2xl font-bold group">
      <article className="min-h-[60px] p-4 flex flex-col sm:flex-row gap-4">
        <>
          {isEdit ? (
            <input
              type="text"
              value={userInput}
              className="flex-1 text-[18px]"
              onChange={(e) => setUserInput(e.target.value)}
            />
          ) : (
            <button
              onClick={onStartEdit}
              className="flex-1 text-[18px] cursor-pointer text-left"
            >
              {todo.content}
            </button>
          )}
        </>
        <div className="w-fit flex hidden group-hover:flex gap-[8px] self-end">
          {isEdit ? (
            <button
              className="w-[45px] h-[45px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl"
              onClick={onFinishEdit}
            >
              <CiCircleCheck size={30} />
            </button>
          ) : (
            <button
              className="w-[45px] h-[45px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl"
              onClick={onStartEdit}
            >
              <CiEdit size={30} />
            </button>
          )}
          <button
            className="w-[45px] h-[45px] flex justify-center items-center bg-[#ED7461] border border-black rounded-2xl"
            onClick={onClickDelete}
          >
            <AiOutlineDelete size={30} />
          </button>
        </div>
      </article>
    </li>
  );
};

export default TodoListItem;
