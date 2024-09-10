import axios from "axios"
export function saveAs(blob: Blob, id: number) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(blob)
  fileReader.onload = (e) => {
    axios.post('/save', {
      id,
      file: e!.target!.result
    }).then(_ => {
      console.log('保存成功')
    }).catch(err => {
      new Error(err)
    })
  }
  fileReader.onerror = () => {
    new Error('save error')
  }
}
