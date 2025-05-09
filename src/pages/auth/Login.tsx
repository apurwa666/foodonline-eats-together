
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="container px-4 max-w-md">
          <Tabs defaultValue="user" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="user">Customer</TabsTrigger>
              <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Customer Login</CardTitle>
                  <CardDescription className="text-center">
                    Enter your email and password to login to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-foodonline-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full bg-foodonline-primary hover:bg-red-700">Login</Button>
                  <p className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-foodonline-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="restaurant">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Restaurant Login</CardTitle>
                  <CardDescription className="text-center">
                    Login to manage your restaurant, menu and orders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="restaurant-email">Email</Label>
                    <Input id="restaurant-email" type="email" placeholder="restaurant@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="restaurant-password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-foodonline-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="restaurant-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full bg-foodonline-primary hover:bg-red-700">Login</Button>
                  <p className="mt-4 text-center text-sm">
                    Don't have a restaurant account?{" "}
                    <Link to="/register-restaurant" className="text-foodonline-primary hover:underline">
                      Register your restaurant
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
