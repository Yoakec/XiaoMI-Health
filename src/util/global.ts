import { app } from "electron"
import { ElNotification } from "element-plus"
import { writeFileSync } from 'fs'
import * as path from 'path'

const userDataPath: string = app.getPath('userData')
const log: any = []
const sendMsg = (text: string, type = 'LOAD_DATA_STATUS') => {
    ElNotification.error({
        title: 'Error',
        message: text
    })
    log.push([Date.now(), type, text])
    saveLog()
}

const saveLog = () => {
    const text = log.map((item: any[]) => {
        const time = new Date(item[0]).toLocaleString()
        const type = item[1] === 'LOAD_DATA_STATUS' ? 'INFO' : item[1]
        const text = item[2]
        return `[${type}][${time}]${text}`
    }).join('\r\n')
    writeFileSync(path.join(userDataPath, 'log.txt'), text)
}

export { sendMsg, userDataPath }