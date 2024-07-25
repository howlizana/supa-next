"use client";
import React, { useState } from "react";
import { IoShareSocialOutline, IoSearchOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  sharedUserFullName = "",
  ownerUserId = "",
  loading = false,
  todoListData = [],
  isReadOnly = false,
  onUpdate = (id, updatedContent) => {},
  onCreate = () => {},
  onDelete = (id) => {},
  onSearch = (terms) => {},
}) => {
  const [copiedText, copy] = useCopyToClipboard();
  const [userSearchInput, setUserSearchInput] = useState("");

  const handleCopy = () => {
    const shareLink = `${"todo리스트 공유하는 링크"}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`공유링크 복사 완료! \n ${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const handleSearchEnd = () => {
    onSearch(userSearchInput);
    setUserSearchInput("");
  };

  return (
    <>
      <section className=" min-h-[70vh] bg-[#69CFCF]">
        <div className=" w-full max-w-[800px] p-[20px] mx-auto">
          {!isReadOnly && (
            <article className="flex flex-row justify-between items-center">
              <div className=" font-bold text-[32px]">
                {sharedUserFullName && <div>{sharedUserFullName}</div>}
                Thing to do:
              </div>
              {ownerUserId && (
                <button
                  onClick={handleCopy}
                  className=" font-bold text-[20px] flex flex-row items-center"
                >
                  share
                  <IoShareSocialOutline />
                </button>
              )}
            </article>
          )}
          <article className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex flex-1 h-[60px]">
              <input
                className=" p-4 flex-1 bg-[#F7CB66] border border-black rounded-l-2xl font-bold"
                type="text"
                value={userSearchInput}
                onChange={(e) => setUserSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearchEnd();
                }}
              />
              <button
                onClick={() => handleSearchEnd()}
                className="w-[60px] flex justify-center items-center bg-black rounded-r-2xl"
              >
                <IoSearchOutline size={40} color="#fff" />
              </button>
            </div>
            <button
              onClick={onCreate}
              className="h-[60px] w-[200px] flex justify-center items-center bg-[#7EBB95] border-black rounded-2xl font-bold text-[20px]"
            >
              new task
            </button>
          </article>
          <div className="h-[2px] my-10 bg-black"></div>
          {todoListData?.length > 0 ? (
            <ul className="flex flex-col gap-6">
              {(todoListData ?? []).map((todo) => (
                <TodoListItem
                  key={todo?.id}
                  todo={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          ) : (
            <div> {loading ? "Loading.." : "Empty!"} </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TodoList;
