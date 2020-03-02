// <copyright file="ProjectsController.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controllers to manage all projects.
    /// </summary>
    [Authorize]
    [ApiController]
    public class ProjectsController : BaseAuthenticatedController
    {
        private readonly IProjectRepository projectRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProjectsController" /> class.
        /// </summary>
        /// <param name="projectRepository">The project repository.</param>
        public ProjectsController(IProjectRepository projectRepository)
        {
            this.projectRepository = projectRepository;
        }

        /// <summary>
        /// Get all the projects.
        /// </summary>
        /// <returns>List of all projects associated to the current user.</returns>
        [HttpGet]
        [Route("api/projects")]
        public ActionResult<IEnumerable<Project>> GetAllProjects()
        {
            return this.projectRepository.GetUserProjects(this.UserId);
        }
    }
}