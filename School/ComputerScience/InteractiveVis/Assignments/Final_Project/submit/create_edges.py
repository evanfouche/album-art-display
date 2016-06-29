#=============================================#
#   AUTHOR: EVAN FOUCHE						  #
#   TITLE: INTERACTIVE VIZ FINAL              #
#											  #
#   Code runs through music directory         #
#   grabs artist album and cover art          #
#   creates new cover art 'edges'			  #
#   outputs images and related data as json   #
#											  #    
#=============================================#

import os, sys
from PIL import Image, ImageFilter, ImageDraw
import json

def get_dominant_colors(directory_path, infile, image_increment_, dictionary, about_image_, numcolors=2, swatchsize=30, resize=150):

    image = Image.open(infile)
    image.load()
    image = image.resize((resize, resize))
    result = image.convert('RGB').convert('P', palette=Image.ADAPTIVE, colors=numcolors)
    result.putalpha(0)
    colors = result.getcolors(resize*resize)

    # Save colors to file

    pal = Image.new('RGB', (swatchsize, swatchsize*numcolors))
    draw = ImageDraw.Draw(pal)

    posx = 0
    for count, col in colors:
        draw.rectangle([0, posx, swatchsize, posx+swatchsize], fill=col)
        posx = posx + swatchsize

    del draw
    pal.save(directory_path+'/display_dominant_colors_sw2_'+image_increment_+'.jpg', "JPEG")
    dictionary['display_dominant_colors_sw2_'+image_increment_+'.jpg'] = about_image_
#===============================================================================
def squish_image(directory_path, infile, display_edge_, image_increment_, dictionary, about_image_):
	im = Image.open(infile)
	im2 = im.resize((display_edge_))
	im2.save(directory_path+'/display_edge_smush'+image_increment_+'.jpg', 'JPEG')
	# im.save(directory_path+'/cover_image'+image_increment_+'.jpg', 'JPEG')
	dictionary['display_edge_smush'+image_increment_+'.jpg'] = about_image_
#===============================================================================
#===============================================================================
if __name__ == '__main__':
	#output json dictionaries
	squished = {}
	dominant = {}

	display_edge = (30, 1400)
	image_increment = 0
	i = 0
	# walk through a directory, apply image manipulation to album cover JPEG files
	# path = '/home/evan/School/ComputerScience/InteractiveVis/Assignments/Final_Project/test_music_dir/'
	# put_path = '/home/evan/School/ComputerScience/InteractiveVis/Assignments/Final_Project/test_music_dir/images/'
	path = '/media/evan/Seagate Backup Plus Drive/Music_backup/Music_Backup/'
	put_path = '/media/evan/Seagate Backup Plus Drive/Music_backup/images/'
	# print "==================================="
	subdirs = [name for name in os.listdir(path) if os.path.isdir(os.path.join(path, name))]
	# print subdirs
	# print len(subdirs)
	# print "==================================="
	# print "==================================="
	# for (dirpath, dirnames, filenames) in os.walk(path):

	for (dirpath, dirnames, filenames) in os.walk(path):
		# print dirpath
		for filename in filenames:
			# print filename
			if filename.endswith('older.png') | filename.endswith('ront.jpg') \
			| filename.endswith('over.jpg') | filename.endswith('older.jpg') \
			| filename.endswith('ront.png') | filename.endswith('over.png'):
				# print "file %s found" %(filename)
				file_path = os.path.join(dirpath, filename)
				assoc_im = Image.open(file_path)
				assoc_im.save(put_path+'/cover_image'+str(image_increment)+'.jpg', 'JPEG')
				# print "file path: ",file_path
				about_image = subdirs[i].split(' - ',1)
				about_image.append('cover_image'+str(image_increment)+'.jpg')
				# print "this is info about images: %s" %about_image
				squish_image(put_path, file_path, display_edge, str(image_increment), squished, about_image)
				get_dominant_colors(put_path, file_path, str(image_increment), dominant, about_image)
				image_increment+=1
				break
			else:
				# i+=1
				continue
		if filename != 'PIL_img_manip.py':
			# if dirpath != '/media/evan/Seagate Backup Plus Drive/Music_backup/Music_Backup/images/':
			i+=1

	print "=================================================="
	print "dictionaries"
	# print squished
	# print dominant
	squished_output = put_path+'js/squished_json.js'
	dom_output =  put_path+'js/dominant_json_sw2.js'
	squished_target = open(squished_output, "w")
	dom_target = open(dom_output, "w")
	json_squished = json.dump(squished, squished_target)
	json_dominant = json.dump(dominant, dom_target)
