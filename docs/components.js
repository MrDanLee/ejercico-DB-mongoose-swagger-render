module.exports = {
  components: {
    schemas: {
      Task: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: "task identification number",
            example: "6201064b0028de7866e2b2c4"
          },
          title: {
            type: 'string',
            description: "Task title to register",
            example: "Create an awesome task"
          },
          completed: {
            type: 'boolean',
            description: "Task Status",
            example: "false"
          },
        }
      },
      TaskInput: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: "task identification number",
            example: "6201064b0028de7866e2b2c4"
          },
          title: {
            type: 'string',
            description: "Task title to register",
            example: "Create an awesome task"
          },
          completed: {
            type: 'boolean',
            description: "Task Status",
            example: "false"
          },
        }
      },
      _id: {
        type: 'objectId',
        description: "An id of a task",
        example: "6201064b0028de7866e2b2c4"
      },

    }
  }
}
