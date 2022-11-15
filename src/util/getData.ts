import { readFile, writeFileSync } from 'fs'
import { csvParseRows } from "d3-dsv"
import { BrowserWindow, app } from 'electron'
import debounce from 'lodash/debounce'
import { join } from 'path'
import { sendMsg, userDataPath } from './global'

export const getData = (url: string) => {

    const result: any[] = []
    const isDev = !app.isPackaged

    async function saveJSON(name, data) {
        try {
            await writeFileSync(join(userDataPath, name), data)
        } catch (error: any) {
            sendMsg(error, 'ERROR')
        }
    }

    return new Promise((resolve, reject) => {
        readFile(url, { encoding: 'utf-8' }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                const data = csvParseRows(res)
                resolve('success')
            }
        })
    })

}