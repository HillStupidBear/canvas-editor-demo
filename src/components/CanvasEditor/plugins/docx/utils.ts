import { importData } from "../../api"
export function saveAs(blob: Blob, id: number) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(blob)
  fileReader.onload = (e) => {
    importData(id, e!.target!.result as string)
  }
  fileReader.onerror = () => {
    new Error('save error')
  }
}
