import { Controller } from '@nestjs/common'
import { TaskService } from './task.service'

@Controller('taks/')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}
}
