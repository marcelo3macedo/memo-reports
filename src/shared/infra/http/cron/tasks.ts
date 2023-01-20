import { TASK_GENERATEREPORTS } from "@constants/taskKeys";
import { GenerateReportsTask } from "@modules/reports/useCases/generateReports/GenerateReportsTask";

class Tasks {
    get(taskId) {
        return (taskId == TASK_GENERATEREPORTS ? new GenerateReportsTask(): new GenerateReportsTask())
    }
}

export { Tasks };