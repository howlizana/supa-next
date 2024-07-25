"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onUpdateTodos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController();
  return (
    <div>
      <TodoList
        sharedUserFullName="수린이"
        ownerUserId="1"
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={(id, content) => {
          onUpdateTodos(id, content);
        }}
        onCreate={() => {
          onCreateEmptyTodos();
        }}
        onDelete={(id) => {
          onDeleteTodos(id);
        }}
        onSearch={(terms) => {
          onSearchTodos(terms);
        }}
      />
    </div>
  );
};

export default TodoContainer;
