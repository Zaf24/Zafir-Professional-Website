# Adding Images to the Hero Carousel

To add more images to the slideshow carousel:

## Steps:

1. **Add your images to the `Images ` folder** (note the space at the end)

2. **Copy the images to the public folder:**
   ```bash
   cp "Images /your-image-name.jpg" public/hero-image-3.jpg
   ```

3. **Update the `HeroCarousel.tsx` file:**
   - Open `/src/components/home/HeroCarousel.tsx`
   - Add your new image to the `heroImages` array:
   ```typescript
   const heroImages = [
     {
       id: 1,
       src: "/hero-image-1.jpg",
       alt: "Zafir - Professional Portrait",
     },
     {
       id: 2,
       src: "/hero-banner.jpg",
       alt: "Zafir - Background Image",
     },
     {
       id: 3,
       src: "/hero-image-3.jpg",
       alt: "Your new image description",
     },
   ];
   ```

4. **Save and the carousel will automatically include your new image!**

## Tips:
- Use high-quality images (at least 1920x1080px)
- Images should be in JPG, PNG, or WebP format
- The carousel will automatically cycle through all images every 5 seconds
- Users can navigate manually using the dots at the bottom or arrow keys
