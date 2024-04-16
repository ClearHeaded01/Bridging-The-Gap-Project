import cv2

def main():
    root_dir = r'.\Downloads\code\gesture\train'
    try:
        x = str(input('Enter text : '))        
        paths = gen_path(root_dir, x)
        images = gen_image(paths, x)
        if images:
            combined_image = cv2.hconcat(images)
            cv2.imshow(f"{x}", combined_image)
        else:
            print(r'No images.')
        cv2.waitKey(0)  
        cv2.destroyAllWindows()
    
    except Exception as e:
        print(
            f'{e}'
        )
        print(x)
        cv2.waitKey(0) 
        cv2.destroyAllWindows()


def gen_path(root_dir, text) -> list:
    paths = []
    for i in text:
        paths.append(f'.\Downloads\\code\\gesture\\train\\{i}\\0.jpg')
    return paths


def gen_image(paths : list, text) -> list:
    images = []
    for path in paths:
        image = cv2.imread(path)
        if image is not None:
            images.append(image)
    return images

main()
