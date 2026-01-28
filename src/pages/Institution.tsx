import { useState, useRef } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RichTextEditor from "@/components/ui/rich-text-editor";
import { 
  Building2, 
  MapPin, 
  Tag, 
  Save, 
  ImagePlus, 
  X, 
  Plus,
  GripVertical,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BannerItem {
  id: string;
  image: string;
  heading: string;
  description: string;
}

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

const categories = [
  "Coaching Institute",
  "School",
  "College",
  "Tuition Center",
  "Skill Training",
  "Test Preparation",
  "Other",
];

const Institution = () => {
  // Tuition Info (from onboarding - editable)
  const [instituteName, setInstituteName] = useState("Excellence Academy");
  const [category, setCategory] = useState("Coaching Institute");
  const [address, setAddress] = useState("123 Education Street, Learning City, LC 12345");

  // About Section
  const [aboutContent, setAboutContent] = useState("<p>Welcome to our institution. We are dedicated to providing quality education...</p>");

  // Banner Section
  const [banners, setBanners] = useState<BannerItem[]>([
    {
      id: "1",
      image: "",
      heading: "Welcome to Excellence Academy",
      description: "Your journey to success starts here"
    }
  ]);

  // Gallery Section
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  const galleryInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    toast.success("Institution details saved successfully!");
  };

  // Banner handlers
  const handleBannerImageUpload = (bannerId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBanners(prev => prev.map(b => 
          b.id === bannerId ? { ...b, image: reader.result as string } : b
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  const addBanner = () => {
    const newBanner: BannerItem = {
      id: Date.now().toString(),
      image: "",
      heading: "",
      description: ""
    };
    setBanners(prev => [...prev, newBanner]);
  };

  const removeBanner = (id: string) => {
    setBanners(prev => prev.filter(b => b.id !== id));
  };

  const updateBanner = (id: string, field: keyof BannerItem, value: string) => {
    setBanners(prev => prev.map(b => 
      b.id === id ? { ...b, [field]: value } : b
    ));
  };

  // Gallery handlers
  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          const newImage: GalleryImage = {
            id: Date.now().toString() + Math.random(),
            url: reader.result as string,
            caption: file.name.replace(/\.[^/.]+$/, "")
          };
          setGallery(prev => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeGalleryImage = (id: string) => {
    setGallery(prev => prev.filter(img => img.id !== id));
  };

  const updateGalleryCaption = (id: string, caption: string) => {
    setGallery(prev => prev.map(img => 
      img.id === id ? { ...img, caption } : img
    ));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Tuition Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Tuition Information
            </CardTitle>
            <CardDescription>
              Basic information about your institution from onboarding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Institute Name */}
              <div className="space-y-2">
                <Label htmlFor="instituteName">Institute Name</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="instituteName"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none" />
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="pl-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-10 min-h-[80px] resize-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About the Institution</CardTitle>
            <CardDescription>
              Write a detailed description about your institution. You can add images too.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              content={aboutContent}
              onChange={setAboutContent}
              placeholder="Tell visitors about your institution, its history, mission, and what makes it special..."
            />
          </CardContent>
        </Card>

        {/* Banner Section */}
        <Card>
          <CardHeader>
            <CardTitle>Banner Images</CardTitle>
            <CardDescription>
              Add scrollable banner images with headings and descriptions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {banners.map((banner, index) => (
              <div 
                key={banner.id} 
                className="relative border rounded-lg p-4 space-y-4 bg-muted/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <GripVertical className="h-4 w-4" />
                    Banner {index + 1}
                  </div>
                  {banners.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeBanner(banner.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Banner Image Upload */}
                <div className="space-y-2">
                  <Label>Banner Image</Label>
                  {banner.image ? (
                    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg border">
                      <img 
                        src={banner.image} 
                        alt={`Banner ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => updateBanner(banner.id, 'image', '')}
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center aspect-[21/9] w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Click to upload banner image</span>
                      <span className="text-xs text-muted-foreground mt-1">Recommended: 1920x800px</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleBannerImageUpload(banner.id, e)}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Banner Heading & Description */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Heading</Label>
                    <Input
                      value={banner.heading}
                      onChange={(e) => updateBanner(banner.id, 'heading', e.target.value)}
                      placeholder="Banner heading..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Input
                      value={banner.description}
                      onChange={(e) => updateBanner(banner.id, 'description', e.target.value)}
                      placeholder="Short description..."
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addBanner}
              className="w-full gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Another Banner
            </Button>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
            <CardDescription>
              Upload images of your institution, classrooms, facilities, and events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Gallery Grid */}
            {gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeGalleryImage(image.id)}
                      className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Input
                      value={image.caption}
                      onChange={(e) => updateGalleryCaption(image.id, e.target.value)}
                      placeholder="Caption..."
                      className="mt-2 h-8 text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Upload Button */}
            <label className={cn(
              "flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
              gallery.length === 0 ? "py-12" : "py-6"
            )}>
              <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">
                {gallery.length === 0 ? "Click to upload gallery images" : "Add more images"}
              </span>
              <span className="text-xs text-muted-foreground mt-1">You can select multiple images</span>
              <input
                ref={galleryInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryUpload}
                className="hidden"
              />
            </label>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end pb-6">
          <Button onClick={handleSave} size="lg" className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Institution;
