
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Upload } from "lucide-react";

const RegisterRestaurant = () => {
  const [licenseFile, setLicenseFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicenseFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 max-w-2xl mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Register Your Restaurant</CardTitle>
              <CardDescription className="text-center">
                Fill in your restaurant details to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restaurant-name">Restaurant Name</Label>
                <Input id="restaurant-name" placeholder="Restaurant Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="owner-name">Owner's Name</Label>
                  <Input id="owner-name" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input id="contact-number" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="restaurant@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Restaurant Address</Label>
                <Textarea id="address" placeholder="Full address of your restaurant" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cuisine-type">Cuisine Type</Label>
                <Input id="cuisine-type" placeholder="e.g. Italian, Indian, Fast Food" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="restaurant-license">Restaurant License (Required)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Upload a photo of your restaurant license</p>
                  <p className="text-xs text-gray-400 mb-4">Supported formats: JPEG, PNG, PDF (Max size: 5MB)</p>
                  <Input
                    id="restaurant-license"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("restaurant-license")?.click()}
                  >
                    Select File
                  </Button>
                  {licenseFile && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected: {licenseFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full bg-foodonline-primary hover:bg-red-700">
                Register Restaurant
              </Button>
              <p className="mt-4 text-center text-sm">
                Already have a restaurant account?{" "}
                <Link to="/login" className="text-foodonline-primary hover:underline">
                  Log in
                </Link>
              </p>
              <p className="mt-2 text-center text-xs text-gray-500">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterRestaurant;
