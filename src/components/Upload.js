import { useState, useEffect } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const fileTypes = ['jpeg', 'jpg', 'png']

function Upload() {
  const img = new URL('../assets/image.svg', import.meta.url)
  const [file, setFile] = useState(null)

  const handleDropChange = (file) => {
    setFile(file)
  }

  const handleInputChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    if (file) {
      console.log(file)
    }
  }, [file])

  return (
    <div
      id='image-uploader'
      className='flex h-screen w-screen items-center justify-center bg-slate-50'
    >
      <div className='flex flex-col items-center justify-center rounded-md bg-white px-8 py-12 drop-shadow-md'>
        <h1 className='text-lg'>Upload your image</h1>
        <p className='mt-4 text-[10px] text-gray-500'>
          File should be jpeg, jpg or png
        </p>
        <FileUploader
          handleChange={handleDropChange}
          name='image'
          types={fileTypes}
          maxSize={1}
          onSizeError={() => {}}
          children={
            <div
              id='drop-area'
              className='border-dashed-blue mt-6 flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-sky-500 bg-slate-100 px-20 py-10'
            >
              <img src={img} alt='images' />
              <p className='mt-10 text-xs text-gray-300'>
                Drag & Drop your image here
              </p>
            </div>
          }
        />
        <p className='mt-6 text-xs text-gray-300'>Or</p>
        <label className='mt-6 cursor-pointer rounded-md bg-blue-500 px-3 py-2 font-noto-sans text-xs text-white'>
          <input
            accept='image/jpeg, image/jpg, image/png'
            type='file'
            name='image'
            className='hidden'
            onChange={handleInputChange}
          />
          Choose a file
        </label>
      </div>
    </div>
  )
}

export default Upload
