<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
   // Mostrar todos los negocios
   public function index()
   {
       $business = Business::all();
       return Inertia::render('Business/Index', ['business' => $business]);
   }

   // Guardar un nuevo negocio
   public function store(Request $request)
   {
       $request->validate([
           'name' => 'required|string|max:255',
           'description' => 'required|string|max:255',
           'contact' => 'required|string|max:255',
       ]);

       Business::create($request->all());

       return redirect()->route('business.index')->with('success', 'Business created successfully.');
   }

   // Mostrar un negocio específico
   public function show(Business $business)
   {
       return Inertia::render('Business/Show', ['business' => $business]);
   }
   
   // Actualizar un negocio específico
   public function update(Request $request, Business $business)
   {
       $request->validate([
           'name' => 'required|string|max:255',
           'description' => 'required|string|max:255',
           'contact' => 'required|string|max:255',
       ]);

       $business->update($request->all());

       return redirect()->route('business.index')->with('success', 'Business updated successfully.');
   }

   // Eliminar un negocio específico
   public function destroy(Business $business)
   {
       $business->delete();

       return redirect()->route('business.index')->with('success', 'Business deleted successfully.');
   }
}
