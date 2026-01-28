import { useState, useRef } from "react";
import DashboardLayout, { useSidebarState } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Trash2,
  Images,
  LayoutTemplate,
  ImageIcon
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
  const { collapsed } = useSidebarState();
  
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

  // Logo & Cover Image
  const [logo, setLogo] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");

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

  // Logo & Cover handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DashboardLayout>
      <div className={cn(
        "space-y-6 mx-auto transition-all duration-300",
        collapsed ? "max-w-6xl" : "max-w-5xl"
      )}>
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="info" className="gap-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Tuition Info</span>
              <span className="sm:hidden">Info</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2">
              <Images className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
              <span className="sm:hidden">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="banners" className="gap-2">
              <LayoutTemplate className="h-4 w-4" />
              <span className="hidden sm:inline">Banners</span>
              <span className="sm:hidden">Banners</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Tuition Info */}
          <TabsContent value="info" className="space-y-6">
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

            {/* Logo & Cover Image Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  Logo & Cover Image
                </CardTitle>
                <CardDescription>
                  Upload your institution's logo and cover image for branding
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Logo Upload */}
                <div className="space-y-3">
                  <Label>Institution Logo</Label>
                  <div className="flex items-start gap-6">
                    {logo ? (
                      <div className="relative">
                        <div className="h-32 w-32 overflow-hidden rounded-lg border bg-muted">
                          <img 
                            src={logo} 
                            alt="Institution Logo"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => setLogo("")}
                          className="absolute -top-2 -right-2 h-7 w-7 p-0 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center h-32 w-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <ImagePlus className="h-8 w-8 text-muted-foreground mb-1" />
                        <span className="text-xs text-muted-foreground text-center">Upload Logo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                    <div className="flex-1 text-sm text-muted-foreground">
                      <p>Your institution's logo will appear in the header and other branding areas.</p>
                      <p className="mt-1">Recommended: Square image, minimum 200x200px</p>
                    </div>
                  </div>
                </div>

                {/* Cover Image Upload */}
                <div className="space-y-3">
                  <Label>Cover Image</Label>
                  {coverImage ? (
                    <div className="relative aspect-[4/1] w-full overflow-hidden rounded-lg border">
                      <img 
                        src={coverImage} 
                        alt="Cover Image"
                        className="h-full w-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => setCoverImage("")}
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center aspect-[4/1] w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Click to upload cover image</span>
                      <span className="text-xs text-muted-foreground mt-1">Recommended: 1500x500px</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                  <p className="text-sm text-muted-foreground">
                    The cover image will be displayed at the top of your institution's public profile page.
                  </p>
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
          </TabsContent>

          {/* Tab 2: Gallery */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Images className="h-5 w-5 text-primary" />
                  Photo Gallery
                </CardTitle>
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
          </TabsContent>

          {/* Tab 3: Banners */}
          <TabsContent value="banners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LayoutTemplate className="h-5 w-5 text-primary" />
                  Banner Images
                </CardTitle>
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
                        <div className="relative aspect-[4/1] w-full overflow-hidden rounded-lg border">
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
                        <label className="flex flex-col items-center justify-center aspect-[4/1] w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
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
          </TabsContent>

        </Tabs>

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
