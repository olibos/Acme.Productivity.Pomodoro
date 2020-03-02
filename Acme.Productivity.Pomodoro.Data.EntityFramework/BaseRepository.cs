// <copyright file="BaseRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    /// <summary>
    /// Base methods available on all repositories.
    /// </summary>
    public abstract class BaseRepository
    {
        /// <summary>
        /// Set the creation info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetCreated(BaseTrackedModel model, string user)
        {
            model.CreatedBy = model.UpdatedBy = user;
            model.CreationDate = model.UpdateDate = DateTime.UtcNow;
        }

        /// <summary>
        /// Set the creation info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetCreated(BaseTrackedModel model, Guid user)
        {
            this.SetCreated(model, user.ToString());
        }

        /// <summary>
        /// Set the deletion info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetDeleted(BaseTrackedModel model, string user)
        {
            model.IsDeleted = true;
            model.UpdatedBy = user;
            model.UpdateDate = DateTime.UtcNow;
        }

        /// <summary>
        /// Set the deletion info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetDeleted(BaseTrackedModel model, Guid user)
        {
            this.SetDeleted(model, user.ToString());
        }

        /// <summary>
        /// Set the update info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetUpdated(BaseTrackedModel model, string user)
        {
            model.UpdatedBy = user;
            model.UpdateDate = DateTime.UtcNow;
        }

        /// <summary>
        /// Set the update info on a model.
        /// </summary>
        /// <param name="model">The model to be updated.</param>
        /// <param name="user">The user did the action.</param>
        protected void SetUpdated(BaseTrackedModel model, Guid user)
        {
            this.SetUpdated(model, user.ToString());
        }
    }
}