// <copyright file="Startup.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web
{
    using System;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;

    using Acme.Productivity.Pomodoro.Data;
    using Acme.Productivity.Pomodoro.Data.EntityFramework;
    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    using AutoMapper;

    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// Launch the application.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Startup" /> class.
        /// </summary>
        /// <param name="configuration">The configuration to use.</param>
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        /// <summary>
        /// Gets the configuration.
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">The app ton configure.</param>
        /// <param name="env">The environment to configure for.</param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseSpaStaticFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer("start");
                }
            });
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services">The collection of services to configure.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/build"; });

            this.AddDomains(services);
            this.AddRepositories(services);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            });

            var keyBytes = new Rfc2898DeriveBytes(Encoding.UTF8.GetBytes(this.Configuration["jwt:key"]), Encoding.UTF8.GetBytes(this.Configuration["jwt:saltz"]), 4200);
            var key = new SymmetricSecurityKey(keyBytes.GetBytes(512 / 8));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = this.Configuration["jwt:issuer"],
                        ValidAudience = this.Configuration["jwt:issuer"],
                        IssuerSigningKey = key,
                    };
                });
        }

        /// <summary>
        /// Add the domain services to the container.
        /// </summary>
        /// <param name="services">The container.</param>
        private void AddDomains(IServiceCollection services)
        {
        }

        /// <summary>
        /// Add repositories to the container.
        /// </summary>
        /// <param name="services">The container.</param>
        private void AddRepositories(IServiceCollection services)
        {
            services.AddDbContext<PomodoroContext>(options => options.UseSqlServer(this.Configuration.GetConnectionString("PomodoroContext")));
            services.AddAutoMapper(typeof(ModelMapping));

            services.AddScoped<IProjectRepository, ProjectRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}