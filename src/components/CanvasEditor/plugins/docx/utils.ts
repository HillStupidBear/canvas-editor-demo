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
      // const a = document.createElement('a')
      // a.href = window.URL.createObjectURL(blob)
      // a.download = 'doc'
      // a.click()
      // window.URL.revokeObjectURL(a.href)
    })
  }
  fileReader.onerror = () => {
    new Error('save error')
  }
}
