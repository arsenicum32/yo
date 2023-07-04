from pdf2image import convert_from_path
from PIL import Image

def pdf_to_jpg(input_path, output_path):
    # Convert PDF to a list of PIL Image objects
    images = convert_from_path(input_path)

    # Save each image as JPG
    for i, image in enumerate(images):
        image.save(output_path+"/page_"+(i+1)+".jpg", "JPEG")

# Example usage
pdf_file = "./poetryoncloth.pdf"
output_folder = "./poetryoncloth"
pdf_to_jpg(pdf_file, output_folder)
