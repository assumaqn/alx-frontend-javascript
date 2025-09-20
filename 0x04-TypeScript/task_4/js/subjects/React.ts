// task_4/js/subjects/React.ts

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: add experienceTeachingReact
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher &&
        this.teacher.experienceTeachingReact &&
        this.teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
